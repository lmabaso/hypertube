const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Profile Model
const Profile = require('../../models/Profile');

// Load User Model
const User = require('../../models/User');

// Load input Validation
const validateProfileInput = require("../../validation/profile");

// @route   GET api/profile
// desc     Get Current Users Profile
// @acces   Private
router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    const errors = {};

        Profile.findOne({ user: req.user.id })
            .populate('user', ['name', 'avater'])
            .then(profile => {
                if(!profile) {
                    errors.noprofile = 'There is no profile for this user';
                    return res.status(404).json(errors);
                }
                res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    }
);

// @route   GET api/profile/all
// desc     Get all profile
// @acces   Private
router.get(
    '/all',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const errors = {};

        Profile.find({ user: req.user.id })
            .populate('user', ['name', 'avater'])
            .then(profiles => {
                if (!profiles) {
                    errors.noprofile = 'There is no profile for this user';
                    return res.status(404).json(errors);
                }
                res.json(profiles);
            })
            .catch(err => res.status(404).json({ profile: 'There are no profiles' }));
    }
);


// @route   GET api/profile/handle/:handle
// desc     Get profile by handle
// @acces   Private
router.get(
    '/handle/:handle',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const errors = {};

        Profile.findOne({ handle: req.params.handle })
          .populate("user", ["name", "avater"])
          .then(Profile => {
            if (!Profile) {
              errors.noprofile = "There is no profile for this user";
              return res.status(404).json(errors);
            }
            res.json(profile);
          })
          .catch(err => res.status(404).json(err));
    }
);

// @route   GET api/profile/user/:user_id
// desc     Get profile by user ID
// @acces   Private
router.get(
    '/user/:user_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const errors = {};

        Profile.findOne({ handle: req.params.user_id })
            .populate("user", ["name", "avater"])
            .then(Profile => {
                if (!Profile) {
                    errors.noprofile = "There is no profile for this user";
                    return res.status(404).json(errors);
                }
                res.json(profile);
            })
            .catch(err => res.status(404).json({profile: 'Theres no profile for this user'}));
    }
);

// @route   POST api/profile
// desc     Current or edit Users Profile
// @acces   Private
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateProfileInput(req.body);

        // Check Validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        // Get fields
        const profileFields = {};
        profileFields.user = req.user.id;
        if (req.body.handle) profileFields.handle = req.body.handle;
        if (req.body.language) profileFields.language = req.body.language;
        if (req.body.avater) profileFields.avater = req.body.avater;
        //Social
        profileFields.social = {}
        if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
        if (req.body.twitter) profileFields.social.twitter = req.body.twitter;

        Profile.findOne({ user: req.user.id })
            .then(profile => {
                if (profile) {
                    // Update
                    Profile.findByIdAndUpdate(
                        { user: req.user.id },
                        { $set: profileFields },
                        { new: true }
                    ).then(profile => res.json(profile));
                } else {
                    // Create

                    // Check if handle exists
                    Profile.findOne({ handle: profileFields.handle })
                        .then(profile => {
                            if (profile) {
                                errors.handle = 'That handle already exists';
                                res.status(400).json(errors);
                            }
                            // Save Profile
                            new Profile(profileFields).save().then(profile => res.json(profile));
                        });
                }
            });
       
    }
);

module.exports = router;