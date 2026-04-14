export type Employee = {
  id: string;
  name: string;
  role: string;
  image: any;
  bio: string;
  funfact: string;
};

export const employees: Employee[] = [
  {
    id: "1",
    name: "Alice Rasmusen",
    role: "Designer",
    image: require("../assets/images/alice.jpg"),
    bio: "Alice er vores kreative hjerne bag alle designs. Hun har en passion for minimalistisk design og bruger alt for mange timer på at vælge den perfekte skrifttype.",
    funfact:
      "Alice har en gang brugt 3 dage på at beslutte sig for om en knap skulle være 2px eller 3px afrundet. Knappen blev slettet en uge senere.",
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Udvikler",
    image: require("../assets/images/priya.jpg"),
    bio: "Priya er vores mest dedikerede udvikler. Hun skriver kode der er så ren, at resten af teamet føler sig utilpas ved deres eget arbejde.",
    funfact:
      "Priya drikker præcis 4 kopper kaffe om dagen. Forsøg ikke at tale med hende før kop nummer 2.",
  },
  {
    id: "3",
    name: "Bob Flemming",
    role: "Project Manager",
    image: require("../assets/images/bob.jpg"),
    bio: "Bob er manden der sørger for at alle ved hvad de skal lave - undtagen ham selv. Han har en kalender der er så fuld, at han booker møder om at planlægge møder.",
    funfact:
      "Bob har engang holdt et 2 timers møde om hvordan man gør møder kortere.",
  },
];
