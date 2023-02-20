const rpgteamAlpha = [
    {
      id: 1,
      team: "teamAlpha",
      type: "warrior",
      maxHp: 20,
      hp: 20,
      maxMp: 5,
      mp: 5,
      physAtk: 5,
      physDef: 3,
      accuracy: 2,
      speed: 4,
      teamOrder: 1,
      skills: [
        { skillId: 10, name: "sword slash", type: "aoe", damage: 7, mpCost: 2 }
      ],
      conditions: [],
      active: true,
      spriteUrl:
        "http://www.avatarsinpixels.com/minipix/eyJIYWlyTG93ZXIiOiI1IiwiQm9keSI6IjIiLCJFeWVzIjoiMjIiLCJNb3V0aCI6IjEyIiwiU2hvZXMiOiIzIiwiUGFudHMiOiIzIiwiVG9wIjoiMyIsIkphY2tldCI6IjQiLCJDYXBlIjoiMiIsIk5lY2siOiIyIiwiSGFpciI6IjEiLCJza2luVG9uZSI6ImY4ZDNiOSIsImV5ZXNUb25lIjoiYTYyODU3IiwiaGFpclRvbmUiOiJlYWU0NmQiLCJwYW50c1RvbmUiOiI2ODQ2ODgiLCJwYW50c1RvbmUyIjoiODg4ODg4IiwidG9wVG9uZSI6ImNhZjY5YyIsImNhcGVUb25lIjoiMDA3OGFkIiwiamFja2V0VG9uZSI6IjAwOTlkZCIsIm5lY2tUb25lIjoiYzRiZDI4In0=/1/show.png"
    },
    {
      id: 3,
      team: "teamAlpha",
      type: "mage",
      maxHp: 14,
      hp: 14,
      maxMp: 16,
      mp: 16,
      physAtk: 2,
      physDef: 1,
      accuracy: 3,
      speed: 5,
      teamOrder: 2,
      skills: [
        { skillId: 13, name: "fireball", type: "single", damage: 4, mpCost: 2 }
      ],
      conditions: [],
      active: true,
      spriteUrl:
        "http://www.avatarsinpixels.com/minipix/eyJIYWlyTG93ZXIiOiIxMCIsIkJvZHkiOiIyIiwiRXllcyI6IjciLCJNb3V0aCI6IjMiLCJTb2NrcyI6IjciLCJTaG9lcyI6IjIiLCJQYW50cyI6IjIiLCJUb3AiOiIxIiwiSmFja2V0IjoiNyIsIk5lY2siOiIyIiwiSGFpciI6IjE0Iiwic2tpblRvbmUiOiJlMGI0MjAiLCJleWVzVG9uZSI6IjBjYTUyNCIsImV5ZXNUb25lMiI6IjQ1ZGM1ZCIsIm1hc2tUb25lIjoiODRmOGVlIiwiaGFpclRvbmUiOiJmYzgzNDAiLCJoYWlyVG9uZTIiOiIyYTFkNmYiLCJ1bmRlcndlYXJUb25lIjoiZGMyMmNiIiwidW5kZXJ3ZWFyVG9uZTIiOiJiNjJkY2YiLCJwYW50c1RvbmUiOiI1ZDNiMzEiLCJwYW50c1RvbmUyIjoiN2RjMDQxIiwidG9wVG9uZSI6IjQ3OTNlYSIsInRvcFRvbmUyIjoiOTMwOTAxIiwid2luZ3NUb25lIjoiZTMzNGJkIiwid2luZ3NUb25lMiI6IjU2MDJjNSIsInNob2VzVG9uZSI6IjVkM2IzMSIsInNvY2tzVG9uZSI6ImVmYTc0NSIsInNvY2tzVG9uZTIiOiIyODE3ZTYiLCJnbG92ZXNUb25lIjoiYTA0YmY0IiwiZ2xvdmVzVG9uZTIiOiIxMDkxZjgiLCJoYXRUb25lIjoiMGIwMDMxIiwiaGF0VG9uZTIiOiIyNGE2MDIiLCJjYXBlVG9uZSI6IjY3YzIwYSIsImNhcGVUb25lMiI6IjM1MjliNCIsImJlbHRUb25lIjoiZDlmOTY0IiwiamFja2V0VG9uZSI6IjFhMmUyZiIsImphY2tldFRvbmUyIjoiNWM1MTE5IiwibmVja1RvbmUiOiJiZDc3NzciLCJuZWNrVG9uZTIiOiI5OTY0ZTQifQ==/1/show.png"
    }
  ]
  
  const rpgTeamOmega = [
      {
        id: 2,
        team: "teamOmega",
        type: "ninja",
        maxHp: 16,
        hp: 16,
        maxMp: 9,
        mp: 9,
        physAtk: 9,
        physDef: 2,
        accuracy: 3,
        speed: 7,
        teamOrder: 1,
        conditions: [],
        active: true,
  
        spriteUrl:
          "http://www.avatarsinpixels.com/minipix/eyJIYWlyTG93ZXIiOiI0IiwiQ2FwZUJhY2siOiIxIiwiQm9keSI6IjIiLCJNb3V0aCI6IjE0IiwiU2hvZXMiOiIzIiwiUGFudHMiOiIzIiwiVG9wIjoiMiIsIkphY2tldCI6IjEiLCJDYXBlIjoiMyIsIk5lY2siOiIxIiwiSGF0IjoiNSIsInNraW5Ub25lIjoiZjhkM2I5IiwicGFudHNUb25lIjoiNjg0Njg4IiwicGFudHNUb25lMiI6Ijg4ODg4OCIsInRvcFRvbmUiOiJjYWY2OWMiLCJqYWNrZXRUb25lIjoiNmQyZmE3IiwibmVja1RvbmUiOiI2ZDJmYTcifQ==/1/show.png"
      },
      {
        id: 4,
        team: "teamOmega",
        type: "druid",
        maxHp: 12,
        hp: 12,
        maxMp: 13,
        mp: 13,
        physAtk: 4,
        physDef: 2,
        accuracy: 3,
        speed: 5,
        teamOrder: 2,
        skills: [
          { skillId: 11, name: "enroot", type: "aoe", damage: 3, mpCost: 4 }
        ],
        conditions: [],
        active: true,
        spriteUrl:
          "http://www.avatarsinpixels.com/minipix/eyJIYWlyTG93ZXIiOiIxNyIsIkV5ZXMiOiIxOCIsIk1vdXRoIjoiMTQiLCJTaG9lcyI6IjUiLCJHbG92ZXMiOiI2IiwiVG9wIjoiMiIsIk5lY2siOiI0IiwiSGFpciI6IjEyIiwic2tpblRvbmUiOiIwN2UyMjMiLCJleWVzVG9uZSI6IjUwYmE3MSIsImV5ZXNUb25lMiI6IjYxNmRiMCIsIm1hc2tUb25lIjoiZDhhODM2IiwiaGFpclRvbmUiOiI4YmMzNTYiLCJoYWlyVG9uZTIiOiJmNzQyYjIiLCJ1bmRlcndlYXJUb25lIjoiNDY4YmYwIiwidW5kZXJ3ZWFyVG9uZTIiOiI1ZTJmNGMiLCJwYW50c1RvbmUiOiJmMWE3NjAiLCJwYW50c1RvbmUyIjoiNTY2OWNlIiwidG9wVG9uZSI6IjYxNmRiMCIsInRvcFRvbmUyIjoiMDZhNTIzIiwid2luZ3NUb25lIjoiMDNmMWNjIiwid2luZ3NUb25lMiI6IjFhOTNkMSIsInNob2VzVG9uZSI6ImFlOGQzZSIsInNvY2tzVG9uZSI6IjNkYTdhNSIsInNvY2tzVG9uZTIiOiIxY2UyNzgiLCJnbG92ZXNUb25lIjoiZWM5YWEyIiwiZ2xvdmVzVG9uZTIiOiI4ZDkyNWIiLCJoYXRUb25lIjoiNGE3NjQxIiwiaGF0VG9uZTIiOiIyZDEzNTEiLCJjYXBlVG9uZSI6ImQ1YWY2ZSIsImNhcGVUb25lMiI6ImRlZDEwMyIsImJlbHRUb25lIjoiMGZlZWQyIiwiamFja2V0VG9uZSI6IjQ1NzA2YyIsImphY2tldFRvbmUyIjoiNDE1YTY5IiwibmVja1RvbmUiOiJmNzQyYjIiLCJuZWNrVG9uZTIiOiI4NjQ4ZDAifQ==/1/show.png"
      },
      {
        id: 5,
        team: "teamOmega",
        type: "cleric",
        maxHp: 11,
        hp: 11,
        maxMp: 16,
        mp: 16,
        physAtk: 4,
        physDef: 3,
        accuracy: 3,
        speed: 6,
        teamOrder: 3,
        skills: [
          { skillId: 12, name: "holy smite", type: "aoe", damage: 4, mpCost: 6 }
        ],
        conditions: [],
        active: true,
        spriteUrl:
          "http://www.avatarsinpixels.com/minipix/eyJIYWlyTG93ZXIiOiI4IiwiRXllcyI6IjgiLCJNb3V0aCI6IjEwIiwiU29ja3MiOiIxNSIsIkdsb3ZlcyI6IjIiLCJUb3AiOiIxMSIsIkphY2tldCI6IjYiLCJIYWlyIjoiMTQiLCJoYWlyVG9uZSI6ImZmZWY3NSIsInRvcFRvbmUiOiJlZWVlZWUiLCJzaG9lc1RvbmUiOiJkZGRkZGQiLCJnbG92ZXNUb25lIjoiZWVlZWVlIiwiZ2xvdmVzVG9uZTIiOiJlZWVlZWUiLCJqYWNrZXRUb25lIjoiYmFkYmVkIiwiamFja2V0VG9uZTIiOiI4ZGM0ZTEifQ==/1/show.png"
      }
    ]
  
  export { rpgteamAlpha, rpgTeamOmega };