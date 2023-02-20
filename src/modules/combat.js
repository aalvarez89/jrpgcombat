const calculateDmg = (attacker, defender, skill) => {
    let damage = skill ? skill.damage : attacker.physAtk;
    return defender.hp - damage <= 0 ? 0 : defender.hp - damage;
  }

const consumeMP = (attacker, skill) => {

      return { ...attacker, mp: skill ? attacker.mp - skill.mpCost : attacker.mp, active: false }
    }


const checkWinRoutine = (alpha, omega) => {
    // console.log('a', , 'o', omega.reduce((x, y) => x + y. hp, 0))
    const teamAlphaTotalHp = alpha.reduce((x, y) => x + y. hp, 0);
    const teamOmegaTotalHP = omega.reduce((x, y) => x + y. hp, 0);

    return !teamAlphaTotalHp || !teamOmegaTotalHP ? true : null
}

export { calculateDmg, checkWinRoutine, consumeMP };
