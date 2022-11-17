function jsf32(a, b, c, d) {
    return function() {
        a |= 0; b |= 0; c |= 0; d |= 0;
        var t = a - (b << 27 | b >>> 5) | 0;
        a = b ^ (c << 17 | c >>> 15);
        b = c + d | 0;
        c = d + t | 0;
        d = a + t | 0;
        return (d >>> 0) / 4294967296;
    }
  }
  
  const random = jsf32(1, 1, 1, 1);
  
  function uuid(random) {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
  }
  
  let ticks = 0;
  setInterval(() => {
    const randomN = random();
    let customer = "";
  
    if (randomN < 0.25) {
      customer = "Amanda's Almonds"
    } else if (randomN < 0.5) {
      customer = "Bob's Bus Repair"
    } else if (randomN < 0.75) {
      customer = "Carol's Car Wash"
    } else {
      customer = "Dave's DinoLand"
    }
    console.log(JSON.stringify({
      paymentId: uuid(random),
      customer,
      amountInEur: Math.floor(randomN * 100)+1
    }))
  
    if (ticks > 100) {
      console.error('SEGFAULT - OutOfPizzaException')
      process.exit(1);
    }
    ticks++;
  }, 100)
  
  // process.exit(1)