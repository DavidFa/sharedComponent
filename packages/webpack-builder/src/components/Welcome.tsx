import React, { useState, useEffect } from 'react';
type WelcomeType = {
  user: string;
  age?: number;
};
const Welcome: React.FC<WelcomeType> = ({ user, age: defaultAge = 30 }) => {
  const [person, setPerson] = useState<WelcomeType | null>(null);

  useEffect(() => {
    setPerson({ user, age: defaultAge });
  }, []);

  return (
    <h1>
      Hello {person?.user} from React boilerplate {person?.age}
    </h1>
  );
};

export default Welcome;
