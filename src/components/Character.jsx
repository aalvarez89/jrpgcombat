import { useState, useEffect } from "react";

const Character = (props) => {
  const {
    currentTeamTurn,
    activeUnit,
    targetUnits,
    setTargetUnits,
    isCombatActive,
    initializeCombat,
    engageCombat,
    selectedSkill,
    setSelectedSkill,
    passTurn,
    stats,
    id
  } = props;

  const [hp, setHp] = useState(0);
  const [mp, setMp] = useState(0);

  const [active, setActive] = useState([]);

  const [skills, setSkills] = useState();
  const [openSkills, setOpenSkills] = useState(false);

  useEffect(() => {
    setHp(stats.hp);
    setMp(stats.mp);

    setActive(stats.active);
    setSkills(stats.skills);
    stats.hp <= 0 ? setActive(false) : setActive(true)
  }, [stats]);

  // useEffect(() => {
  //   if (stats.hp <= 0) {console.log('WEPAH'); setActive(false);}
  // }, [stats.hp]);

  useEffect(() => {
    if (activeUnit === id) {
      console.log(stats.type + " and " + stats.hp )
      if (hp === 0) {
        passTurn(stats)
      }
    }
  }, [activeUnit])

  return (
    <div className={`character`}>
      <div>
        <div className="numberValue">
          {hp}/{stats.maxHp}
        </div>
        <progress className="hpBar" value={hp} max={stats.maxHp}></progress>
      </div>
      <div>
        <div className="numberValue">
          {mp}/{stats.maxMp}
        </div>
        <progress className="mpBar" value={mp} max={stats.maxMp}></progress>
      </div>

      <div className={`characterSection`}>
        <div className={`currentTurnContainer`}>
          {currentTeamTurn !== stats.team &&
          isCombatActive &&
          targetUnits.includes(id) ? (
            <div
              style={{ cursor: "pointer" }}
              className={`currentTurnArrow`}
              onClick={() => engageCombat(selectedSkill)}
            >
              ↓
            </div>
          ) : null}
        </div>
        <div className={`${active ? "activeCharacter" : ""}`}>
          {stats.type}
        </div>
        <div
          onClick={() => {
            setTargetUnits([id]);
          }}
        >
          <img src={stats.spriteUrl} alt={`${stats.type}-sprite`} />
        </div>
      </div>

      {active && activeUnit === id ? (
        <div onClick={() => initializeCombat()} className="hoverMenu">
          Attack
        </div>
      ) : null}
      {active && activeUnit === id && skills && skills[0] ? (
        <div onClick={() => setOpenSkills(!openSkills)}>
          <div className="hoverMenu">Skills</div>
          {openSkills ? (
            <div style={{ fontSize: "12px" }}>
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className={`listSkill ${mp > skill.mpCost ? "": "disabledSkill"}`}
                  onClick={mp > skill.mpCost ? () => { setSelectedSkill(skill); initializeCombat(skill)} : () => console.log("No MP!")}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
      {activeUnit === id && hp > 0? (
        <div onClick={() => passTurn(stats)} className="hoverMenu">
          Pass Turn
        </div>
      ) : null}
    </div>
  );
};

export default Character;
