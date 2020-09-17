const supertest = require('supertest')
const server = require('../api/server')
const router = require('../router/friends-router')
const db = require('../data/dbConfig')

describe('friends_router', () => {
    
    describe('GET /', () => {
        it('should return 200 OK', async () => {
            return supertest(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
})


describe('POST /', () => {

beforeEach(async () => {
        // truncate or empty the hobbits table
        await db('friends').truncate();
    })

    it('should return 201 when passed correct data', async () => {
        const res = await supertest(server)
            .post('/api/friends')
            .send({ name: 'joe' })

            expect(res.statusCode).toEqual(201)   
    })

    it('should fail with a code 400 if passed incorrect info', async () => {
        const res = await supertest(server)
            .post('/api/friends')
            .send({})

            expect(res.status).toBe(400)
    })
})

describe('DELETE /:id', () => {
    it('should return 204 when deleted', async () => {
        const res = await supertest(server)
            .delete('/api/friends/3')
            expect(res.statusCode).toBe(204)
    })

    it('should send error 404 if friend id is incorrect', async () => {
        const res = await supertest(server)
            .delete('/api/friends/3')
            expect(res.status).toBe(404)
    })
})