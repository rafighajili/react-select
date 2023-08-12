import { useState } from 'react';
import Select from './components/Select';

const cars = [
  { id: 1, name: 'Mercedes Benz' },
  { id: 2, name: 'Tesla' },
  { id: 3, name: 'BMW' },
  { id: 4, name: 'Rolls Royce' },
  { id: 5, name: 'Bentley' },
  { id: 6, name: 'Bugatti' },
  { id: 7, name: 'Porsche' },
];

export default function App() {
  const [selected, setSelected] = useState(cars[0]);

  return (
    <div className="grid place-items-center w-screen h-screen">
      <div className="w-96 px-16 py-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
        <Select value={selected} onChange={setSelected} elements={cars} />
      </div>
    </div>
  );
}
