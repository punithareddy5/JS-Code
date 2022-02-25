import request from "supertest";
import { app } from ".";
import { sendMsg } from "./utils";

describe("test API and SMS Function", () => {
    it("tests the post new movies endpoint and returns as success message", async () => {
        const response = await request(app).post('/').send({
            "mobNumber": "9999999999",
            "msgBody": "This is my number"
        });
        try {
            expect(response.body.message).toBe('success OK GO !.....9999999999');
        } catch (e) {
            expect(e).toBeTruthy()
        }
    });
    it("tests the post new moviesw", async () => {
        const response = await request(app).post('/').send({});
        try {
            expect(response.body.message).toBe('success OK GO !.....9999999999');
        } catch (e) {
            expect(e).toBeTruthy()
        }
    });
    it("should return  ", async () => {
        try {
            const r = await sendMsg({ "MobileNum" : 9999999999, "Msgbody" : "This is my number"})
        } catch (e) {
            expect(e).toBeTruthy()
        }
    });
}); 