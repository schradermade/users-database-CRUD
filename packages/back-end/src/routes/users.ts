import { Router } from 'express';
import IRoute from '../types/IRoute';
import { User } from '../services/db';

const UsersRouter: IRoute = {
  route: '/',
  router() {
    const router = Router();

    router.route('/users')
      // Fetch all users
      .get(async (req, res) => {
        // pro tip: if you're not seeing any users, make sure you seeded the database.
        //          make sure you read the readme! :)

        return User.findAll({order: [
          ['lastName', 'ASC'],
      ]})
          .then(users => {
            return res.json({
              success: true,
              data: users,
            });
          })
          .catch(err => {
            console.error('Failed to list all users.', err);
            res.status(500).json({
              success: false,
            });
          });
      })
      
    router.route('/user/:id')
      // Fetch single user
      .get(async (req, res) => {
        const userId = parseInt(req.params.id)
        // pro tip: if you're not seeing any users, make sure you seeded the database.
        //          make sure you read the readme! :)

        return User.findOne({where: {id: userId}})
          .then(user => {
            return res.json({
              success: true,
              data: user,
            });
          })
          .catch(err => {
            console.error('Failed to list all users.', err);
            res.status(500).json({
              success: false,
            });
          });
      });

      return router;
  },
};

export default UsersRouter;
