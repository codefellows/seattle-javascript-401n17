# Dice

Requirements:

- Starting Bankroll
  - Could be a prop?
  - Could be context?
  - Could be an input?
- Roll the dice
  - Roll 2
  - Add em up
- Check the total and change balance
  - Win or a Loss
- If balance <= 0 no more rolling for you

```javascript
<App>
  <Context>
    s: bankroll
    f: changeBankroll
    <Game>

      f:checkWin
        c:changeBankroll

      <Header />

      <Dice>
        s: d1
        s: d2
        s: total
        c: bankroll
        f: roll
          p: App.checkWin
        <span>d1, d2, total</span>
        <button roll></button> // conditional on c:bankroll
      </Dice>

      <Bankroll>
        c:bankroll
        <span>c:bankroll</span>
      </Bankroll>

    </Game>
</Context>
</App>
```
