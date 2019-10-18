const server = require("../server")
const request = require("supertest")

const cheerio = require('cheerio')
// const $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>')

// console.log($)



test('test is working', function() {
    expect(1 + 1).toBe(2)
})

test('tests name of li element within ul element', function(done) {
    request(server).get("/").end(function(err, response) {
        expect(err).toBeNull()

        const $ = cheerio.load(response.text)

        let expected = "Apple"

        let actual = $('.apple', '#fruits').text()
    
        expect(actual).toEqual(expected)
        
        done()
    })
})

test('tests class of li element within ul element', function(done){
    request(server).get("/").end(function(err, response){
        expect(err).toBeNull()
        
        const $ = cheerio.load(response.text)

        let expected = "pear"

        let actual = $('ul .pear').attr('class')

        expect(actual).toEqual(expected)

        done()
    })
})

test('returns number of list elements', function(done){
    request(server).get("/").end(function(err, response){
        expect(err).toBeNull()

        const $ = cheerio.load(response.text)

        let expected = 3

        let actual = $('#fruits').find('li').length
        
        expect(actual).toEqual(expected)

        done()
    })
})

test('returns number of pear elements', function(done){
    request(server).get("/").end(function(err, response){
        expect(err).toBeNull()

        const $ = cheerio.load(response.text)

        let expected = 3

        let actual = $('#fruits').find('.pear').length + $('#fruits-b').find('.pear').length
        
        expect(actual).toEqual(expected)

        done()
    })
})