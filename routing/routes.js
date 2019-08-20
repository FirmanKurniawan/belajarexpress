module.exports = (app) => {
    const UserController = require('../controllers/UserController')

    app.route('/user').get(UserController.showUsers)
    app.route('/user/:id').get(UserController.usersId)
    app.route('/user').post(UserController.usersAdd)
    app.route('/user/:id').put(UserController.usersEdit)
    app.route('/user/:id').delete(UserController.usersDelete)

    app.route('/v2/user').get(UserController.v2showUsers)
    app.route('/v2/user/:id').get(UserController.v2usersId)
    app.route('/v2/user').post(UserController.v2usersAdd)
    app.route('/v2/user/:id').put(UserController.v2usersEdit)
    app.route('/v2/user/:id').delete(UserController.v2usersDelete)
    app.route('/v2/profile').get(UserController.v2Profile)
}