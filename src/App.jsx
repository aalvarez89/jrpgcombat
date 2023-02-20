import { useEffect, useState } from "react";

import { calculateDmg, checkWinRoutine, consumeMP } from "./modules/combat";
import { rpgteamAlpha, rpgTeamOmega } from "./modules/characters";
import Character from "./components/Character";
import "./styles.css";

export default function App() {
  const [teamAlpha, setTeamAlpha] = useState(rpgteamAlpha);
  const [teamOmega, setTeamOmega] = useState(rpgTeamOmega);

  const [currentTeamTurn, setCurrentTeamTurn] = useState("teamAlpha");

  const [currentTurnNumber, setCurrentTurnNumber] = useState(1);
  const [turnOrder, setTurnOrder] = useState([]);
  const [orderCounter, setOrderCounter] = useState(0);
  const [activeUnit, setActiveUnit] = useState(null);
  const [targetUnits, setTargetUnits] = useState();

  const [isCombatActive, setIsCombatActive] = useState(false);

  const [selectedSkill, setSelectedSkill] = useState(null);

  const initializeCombat = (skill) => {

    setIsCombatActive(true);

    const defendingTeam = getDefendingTeam().map(c => c.id);

    if (skill && skill.type === "aoe") {
      setTargetUnits(defendingTeam)
    } else if (skill && skill.type === "single") {
      setTargetUnits([defendingTeam[0]]);
    } else {
      setTargetUnits([defendingTeam[0]]);
    }
  };

  const engageCombat = (skill) => {
    
    const defendingTeam = getDefendingTeam();
    const attackingTeam = getAttackingTeam();

    let attacker = getCurrentChar();
    attacker = consumeMP(attacker, skill);

    const defendingAftermath = defendingTeam.map((defender) => {
      return targetUnits.includes(defender.id)
        ? { ...defender, hp: calculateDmg(attacker, defender, skill) }
        : defender;
    });
    const attackingAftermath = [
      ...attackingTeam.filter((character) => character.id !== attacker.id),
      attacker];

    setDefendingTeam(defendingAftermath);
    setAttackingTeam(attackingAftermath);
  
    if (checkWinRoutine(attackingAftermath, defendingAftermath)) console.log("gg")
       
    setSelectedSkill(null);
    setIsCombatActive(false);
    passTurn(attacker);
  };

  const passTurn = (attacker) => {

    setAttackingTeam([
      ...getAttackingTeam().filter((c) => c.id !== attacker.id),
      { ...attacker, active: false }
    ].sort((a,b) => a.teamOrder - b.teamOrder))

    const nextTurnTeamId = turnOrder[orderCounter < turnOrder.length - 1 ? orderCounter + 1 : 0];
    const nextTurnTeamChar =
      teamAlpha.filter((c) => c.id === nextTurnTeamId)[0] ||
      teamOmega.filter((c) => c.id === nextTurnTeamId)[0];

    setCurrentTeamTurn(nextTurnTeamChar.team);
    if (orderCounter < turnOrder.length - 1) {
      setOrderCounter(orderCounter + 1)
      setActiveUnit(turnOrder[orderCounter + 1])
    } else {
      setOrderCounter(0)
      setActiveUnit(turnOrder[0])
    }
  };

  const renderCharacter = character => {
    return (
      <Character
        key={character.id}
        stats={character}
        id={character.id}
        activeUnit={activeUnit}
        targetUnits={targetUnits}
        setTargetUnits={setTargetUnits}
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
        initializeCombat={initializeCombat}
        engageCombat={engageCombat}
        currentTeamTurn={currentTeamTurn}
        passTurn={passTurn}
        isCombatActive={isCombatActive}
      />
    );
  };

  const getDefendingTeam = () => {
    return currentTeamTurn === "teamAlpha" ? teamOmega : teamAlpha
  }
  const getAttackingTeam = () => {
    return currentTeamTurn === "teamAlpha" ? teamAlpha : teamOmega
  }
  const setDefendingTeam = (aftermath) => {
    return currentTeamTurn === "teamAlpha" ? setTeamOmega(aftermath) : setTeamAlpha(aftermath)
  }
  const setAttackingTeam = (aftermath) => {
    return currentTeamTurn === "teamAlpha" ? setTeamAlpha(aftermath) : setTeamOmega(aftermath)
  }
  const getCurrentChar = () => {
    return currentTeamTurn === "teamAlpha" ? teamAlpha.filter(c => c.id === activeUnit)[0] : teamOmega.filter(c => c.id === activeUnit)[0]
  }


  useEffect(() => {
    // ... determine turn order
    const turnOrder = [...teamAlpha, ...teamOmega]
      .sort((a, b) => a.speed - b.speed)
      .map((c) => c.id);

    setTurnOrder(turnOrder);
    setActiveUnit(turnOrder[orderCounter]);
  }, []);

  useEffect(() => {
    if (
      !teamAlpha.map((t) => t.active).includes(true) &&
      !teamOmega.map((t) => t.active).includes(true)
    ) {
      setCurrentTurnNumber(currentTurnNumber + 1);
      setTeamAlpha(teamAlpha.map((c) => ({ ...c, active: true })));
      setTeamOmega(teamOmega.map((c) => ({ ...c, active: true })));
    }
  }, [currentTeamTurn]);

  useEffect(() => {
    //check for conditions here & replicate for teamAlpha
    // setTeamOmega(
    //   teamOmega.map((c) => {
    //     return { ...c, active: true };
    //   })
    // );
  }, [currentTurnNumber]);

  return (
    <div className="App">
      <h1 onClick={() => console.log(activeUnit)}>OctopitoPVP</h1>
      <div>Current turn: {currentTurnNumber}</div>
      <div className="characters">
        <div>
          <div className="team">{teamAlpha.map((c) => renderCharacter(c))}</div>
        </div>
        <div>
          <div className="team">{teamOmega.map((c) => renderCharacter(c))}</div>
        </div>
      </div>
    </div>
  );
}
