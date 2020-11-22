module.exports = (app) => {
    const user = require("../controllers/user.controller");

    app.post("/api/user/add",user.save);
    app.get("/api/user/list",user.list);
    app.get("/api/user/edit",user.findOne);
    app.put("/api/user/update",user.update);
    app.delete("/api/user/delete",user.delete);
}