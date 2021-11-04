const stringMatch = require('./stringMatch')

describe('stringMatch.js', function () {
  it('should stringMatch “hot dogs”', function () {
    const result = stringMatch('A good day for hot dogs and smoothies', 'hot dogs')
    expect(result).toEqual(true)
  })

  it('should stringMatch “dog hot”', function () {
    const result = stringMatch('A good day for hot dogs and smoothies', 'dog hot')
    expect(result).toEqual(true)
  })

  it('should stringMatch “hot cats”', function () {
    const result = stringMatch('A good day for hot dogs and smoothies', 'hot cats')
    expect(result).toEqual(false)
  })

  it('should stringMatch “"hot dogs" smoothies -burgers -"cold beer"”', function () {
    const result = stringMatch('A good day for hot dogs and smoothies', '"hot dogs" smoothies -burgers -"cold beer"')
    expect(result).toEqual(true)
  })

  it('should stringMatch Xbox News', function () {
    const article = `A closer look at the Xbox Series X controller and 1TB expansion cards

We’ll have a full Xbox Series X preview soon. Also: V-Bucks!

By Tom Warren @tomwarren Sep 23, 2020, 1:59pm EDT

Expandable storage on the Xbox Series X. Photo by Tom Warren / The Verge

Microsoft has previously detailed the new Xbox Series X controller and optional 1TB expansion cards, and now we’ve been able to get a closer look at both. After taking a first look at the Xbox Series X earlier this month, The Verge now has a working Xbox Series X unit with a 1TB expansion card and Microsoft’s updated controller. We’ll have a full preview of the Xbox Series X soon, but for now let’s take a closer look at the controller and expandable storage.

At first glance, the Xbox Series X controller doesn’t look very different to the one that shipped on the Xbox One, but there are some key differences. The size and shape of the controller has been altered ever so slightly to make it smaller overall. The D-pad has also been redesigned, moving from its typical cross shape to a circle style that’s very similar to the Elite controllers. It’s a welcome change for the base controller.

There’s also a slightly more textured grip, but the main new additions are USB-C and a new share button. Microsoft has stuck to the AA battery design on this new controller, meaning you’ll need to purchase a rechargeable play and charge kit separately ($24.99) if you really want to take advantage of USB-C.

The share button is the main meaningful change, which will simplify the experience of uploading screenshots and video clips. Microsoft has designed this button so you tap it to capture content, and then either share it directly from the Xbox Series X or from the Xbox mobile app.

We still don’t have a price for Microsoft’s 1TB expansion cards for the Xbox Series X, but I’ve managed to get a closer look at one this week. These 1TB expansion cards, which will be manufactured by Seagate initially, simply slot into the rear of the Xbox Series X with little effort at all. The cards don’t slot all the way in, so the top section does protrudes a little. There’s no need to open up the Xbox, remove any panels, or anything complicated — just plug and go.

The 1TB expansion cards are a little larger than an SD card and can store Xbox Series X games on them to increase the overall storage in a system. You’ll need one of these if you plan to use more than the built-in 1TB, as once games get enhanced for the Xbox Series X, a lot of them will require the fast built-in storage or these storage cards.

Microsoft has designed these expansion cards to match the same performance found on the internal SSD. You will be able to hook up a USB drive to the Xbox Series X and play Xbox One games on the console, but if a game gets updated with enhancements that rely on the new Xbox Velocity storage architecture, then they’ll need to be copied to the Xbox Series X internal or expandable storage.

We’ll have a full preview of the Xbox Series X soon at The Verge, so stay tuned for a lot more information on Microsoft’s next-gen console.

Photography by Tom Warren / The Verge

Correction: We originally said the rechargeable battery kit costs $59.99, but it actually costs $24.99. We regret the error.`
    const filters = 'Xbox,"Series X","Series S","Microsoft games",V-Bucks'
    filters.split(',').forEach(filter => {
      const result = stringMatch(article, filter)
      console.log('stringMatch:', filter, '=', result)
      // expect(result).toEqual(true)
    })
  })
})
