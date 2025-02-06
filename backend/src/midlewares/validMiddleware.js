import { check } from 'express-validator';
import axios from 'axios';

export const validMiddleware = [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a valid email')
        .isEmail()
        .custom(async (value) => {
            try {
                const response = await axios.get(
                    https://emailvalidation.abstractapi.com/v1/?api_key=YOUR_API_KEY&email=${value}
                );

                if (!response.data.is_valid_format.value || response.data.deliverability !== 'DELIVERABLE') {
                    throw new Error('Email does not exist or is not deliverable');
                }
            } catch (error) {
                throw new Error('Error verifying email');
            }
        }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
];