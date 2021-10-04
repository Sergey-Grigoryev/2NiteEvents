const { AuthenticationError } = require('apollo-server-express');
const { Business, ClientAccount, Event, User, UserVisit } = require('../models');
const { ???token } = require('../utils/auth');