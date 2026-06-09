import { Router } from 'express';
import { authorize } from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from '../config/controllers/subscription.controller.js';

const subscriptionRouter = Router();

// Specific routes FIRST (before /:id wildcard)
subscriptionRouter.get('/', (req, res) => res.send({ title: 'get all subscription' }));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'get upcoming renewals' }));

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.post('/', authorize, createSubscription);

// Wildcard routes AFTER specific ones
subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'get subscription details' }));

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'update subscription' }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'delete subscription' }));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'cancel subscription' }));


export default subscriptionRouter;