const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/ // modèle régulier pour adresse email
    },
    phone: {
        type: String,
        match: /^\+?[0-9]{6,}$/ // modèle régulier pour numéro de téléphone
    },
    password: {
        type: String,
        required: true,
        minlength: 8 // nombre de caractères minimum pour le mot de passe
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: function (val) {
                return val === this.password;
            },
            message: "Les mots de passe ne correspondent pas"
        }
    },
}, {
    timestamps: true
});

// Hash le mot de passe avant de l'enregistrer
userSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err) {
            return next(err);
        }
        this.password = passwordHash;
        next();
    });
});

userSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        } else {
            cb(null, isMatch);
        }
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
