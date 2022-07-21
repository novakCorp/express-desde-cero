const request = require("supertest");
const app = require("../index");

describe("GET users", () => {
    it("should return a state code 200", (done) => {
        request(app)
        .get("/users")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });

    it("should return a message of all users", (done) => {
        request(app)
        .get("/users")
        .expect("Content-Type", /json/)
        .expect('"Listando usuarios"', done)
    });
});


describe("Get user", () => {
    it("should return a message: User found", (done) => {
        request(app)
        .get("/user/1")
        .expect("Content-Type", /json/)
        .expect('"User found"')
        .expect(200)
        .end(done)
    });

    it("should return a code state of 404", (done) => {
        request(app)
        .get("/user/8")
        .expect("Content-Type", /json/)
        .expect(404, done)
    });
});


describe("Post user", () => {
    it("should return the message: Usuario registrado", (done) => {
        const user = {
            id: 4,
            name: 'User 4'
        }
        request(app)
        .post("/create-user")
        .send(user)
        .expect("Content-Type", /json/)
        .expect(200)
        .expect('"Usuario registrado"')
        .end(done)
    });

    it("should return a code state of 500", (done) => {
        const user = {
            id: 1,
            name: 'User 1'
        }
        request(app)
        .post("/create-user")
        .send(user)
        .expect("Content-Type", /json/)
        .expect(500)
        .expect('"Error al registrar"')
        .end(done)
    });

});



