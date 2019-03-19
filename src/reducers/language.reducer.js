import {GET_LANGUAGE} from '../helpers/actionsConst';


const iniState = [
    {
     "id": 1,
     "idMonth": 2,
     "startData": "05.02.",
     "namelanguage": "исландский",
     "level": "A1"
    },
    {
     "id": 2,
     "idMonth": 2,
     "startData": "07.02.",
     "namelanguage": "исландский",
     "level": "A2"
    },
    {
     "id": 3,
     "idMonth": 2,
     "startData": "10.02.",
     "namelanguage": "норвежский",
     "level": "B1"
    },
    {
     "id": 4,
     "idMonth": 2,
     "startData": "20.02.",
     "namelanguage": "финский",
     "level": "A1"
    },
    {
     "id": 5,
     "idMonth": 3,
     "startData": "05.03.",
     "namelanguage": "датский",
     "level": "A1"
    },
    {
     "id": 6,
     "idMonth": 3,
     "startData": "07.03.",
     "namelanguage": "датский",
     "level": "A2"
    },
    {
     "id": 7,
     "idMonth": 3,
     "startData": "10.03.",
     "namelanguage": "норвежский",
     "level": "B2"
    },
    {
     "id": 8,
     "idMonth": 3,
     "startData": "15.03.",
     "namelanguage": "финский",
     "level": "A2"
    },
    {
     "id": 9,
     "idMonth": 3,
     "startData": "20.03.",
     "namelanguage": "шведский",
     "level": "С1"
    },
    {
     "id": 10,
     "idMonth": 3,
     "startData": "31.03.",
     "namelanguage": "шведский",
     "level": "С2"
    },
    {
     "id": 11,
     "idMonth": 4,
     "startData": "05.04.",
     "namelanguage": "шведский",
     "level": "A1"
    },
    {
     "id": 12,
     "idMonth": 4,
     "startData": "07.04.",
     "namelanguage": "шведский",
     "level": "А2"
    },
    {
     "id": 13,
     "idMonth": 4,
     "startData": "10.04.",
     "namelanguage": "норвежский",
     "level": "С2"
    },
    {
     "id": 14,
     "idMonth": 4,
     "startData": "15.04.",
     "namelanguage": "норвежский",
     "level": "С2"
    },
    {
     "id": 15,
     "idMonth": 4,
     "startData": "20.04.",
     "namelanguage": "датский",
     "level": "С1"
    },
    {
     "id": 16,
     "idMonth": 4,
     "startData": "31.04.",
     "namelanguage": "датский",
     "level": "С2"
    },
    {
     "id": 17,
     "idMonth": 5,
     "startData": "05.05.",
     "namelanguage": "норвежский",
     "level": "А1"
    },
    {
     "id": 18,
     "idMonth": 5,
     "startData": "07.05.",
     "namelanguage": "норвежский",
     "level": "А2"
    },
    {
     "id": 19,
     "idMonth": 5,
     "startData": "10.05.",
     "namelanguage": "датский",
     "level": "B2"
    },
    {
     "id": 20,
     "idMonth": 5,
     "startData": "15.05.",
     "namelanguage": "датский",
     "level": "B1"
    },
    {
     "id": 21,
     "idMonth": 5,
     "startData": "20.05.",
     "namelanguage": "шведский",
     "level": "А2"
    },
    {
     "id": 22,
     "idMonth": 6,
     "startData": "05.06.",
     "namelanguage": "финский",
     "level": "В1"
    },
    {
     "id": 23,
     "idMonth": 6,
     "startData": "07.06.",
     "namelanguage": "финский",
     "level": "В2"
    },
    {
     "id": 24,
     "idMonth": 6,
     "startData": "10.06.",
     "namelanguage": "исландский",
     "level": "B2"
    },
    {
     "id": 25,
     "idMonth": 6,
     "startData": "15.06.",
     "namelanguage": "исландский",
     "level": "С1"
    },
    {
     "id": 26,
     "idMonth": 6,
     "startData": "20.06.",
     "namelanguage": "финский",
     "level": "С1"
    },
    {
     "id": 27,
     "idMonth": 7,
     "startData": "05.07.",
     "namelanguage": "исландский",
     "level": "С2"
    },
    {
     "id": 28,
     "idMonth": 7,
     "startData": "07.07.",
     "namelanguage": "финский",
     "level": "С2"
    },
    {
     "id": 29,
     "idMonth": 7,
     "startData": "10.07.",
     "namelanguage": "шведский",
     "level": "B2"
    },
    {
     "id": 30,
     "idMonth": 7,
     "startData": "15.07.",
     "namelanguage": "шведский",
     "level": "В1"
    },
    {
     "id": 31,
     "idMonth": 7,
     "startData": "20.07.",
     "namelanguage": "финский",
     "level": "С1"
    },
    {
     "id": 32,
     "idMonth": 7,
     "startData": "31.07.",
     "namelanguage": "исландский",
     "level": "В1"
    }
   ]

   export default function language(state=iniState, action) {
       switch (action.type) {
           case GET_LANGUAGE:
           return [... action.payload];
           default: 
           return state;
       }
   }
   