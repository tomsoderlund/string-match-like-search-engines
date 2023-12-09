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

  // Hyphen inside word
  it('should stringMatch “eco-friendly”', function () {
    const result = stringMatch('This was a eco-friendly encounter', 'eco-friendly')
    expect(result).toEqual(true)
  })

  // Hyphen at end
  it('should stringMatch “eco-”', function () {
    const result = stringMatch('No Peak in Sight for Emissions', 'eco-')
    expect(result).toEqual(false)
  })

  it('should stringMatch article from Niche News', function () {
    const article = `EIA and IEA are out with projections for emissions and fossil fuel consumption. And they don’t look good. 
    On our current policy trajectory, there is no peak in sight, according to EIA By 2050, we will likely see a 50% increase in energy consumption. And even though renewables will be the fastest-growing new source of energy, hydrocarbon liquid fuels will meet the majority of demand.
    That means emissions could rise through 2050, absent massive changes to policy.
    In July, the International Energy Agency issued a similar analysis showing that carbon emissions will hit record levels in the coming years. And that spending packages around the world — even at historic levels — are still not enough. 
    How do we make sense of this sobering analysis?
    Plus, Wood Mackenzie is out with a new analysis of global energy storage trends, showing that storage deployments are set to triple this year. Most of that growth is coming from America and China, which account for 70% of installations. What are the applications, technologies and markets that will dominate this growth?
    Finally, Europe is in a crisis headed into winter. Natural gas is the second-most confused fuel in Europe — and prices are 6 times higher than they were in the spring.
    A confluence of factors — rapidly rising demand all at once, lower production than expected from Russia, low storage in Europe, lower-than-expected hydro and wind production — are contributing to the problem. 
    What could alleviate the crisis? And does this put strain on Europe’s climate ambitions headed into COP26?
    The Energy Gang is brought to you by Bloom Energy. Bloom’s onsite energy platform provides unparalleled control for those looking to secure clean, reliable 24/7 power that scales to meet critical business needs. It eliminates outage and price risk while accelerating us towards a zero carbon future. Visit Bloom Energy to learn how to take charge today.
    The Energy Gang is brought to you by Hitachi Energy. What does your energy future look like? Look to Hitachi Energy for the advanced energy technologies needed to deliver real outcomes — unlocking new revenue streams, maximizing renewable integration, and lowering carbon emissions. Learn more.`

    // fossil,renewable, THEN recycl,sustainab,zero-waste,"eco-","biodegradable packaging","carbon-neutral shipping","circular economy","e-commerce waste reduction","environmental certifications","ethical sourcing","green e-commerce","green logistics"
    const filters = 'recycl,sustainab,zero-waste,"eco-","biodegradable packaging","carbon-neutral shipping","circular economy","e-commerce waste reduction","environmental certifications","ethical sourcing","green e-commerce","green logistics"'

    let anyMatch = false
    console.log('\n----- Niche News -----')
    filters.split(',').forEach(filter => {
      const result = stringMatch(article, filter)
      anyMatch = anyMatch || result
      console.log('stringMatch:', filter, '=', result)
    })
    console.log('----- Did ANY keyword match? =', anyMatch, '-----')
    expect(anyMatch).toEqual(false)
  })
})
