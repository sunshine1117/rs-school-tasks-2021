import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button';
import CarIcon from '../car';
import { deleteCar, selectCar, startCar, stopCar } from '../../store/actions';

import './garage-item.scss';

type GarageItemTypes = {
  className: string;
  name: string;
  color: string;
  id: number;
};

const GarageItem = ({
  className,
  name,
  color,
  id,
}: GarageItemTypes): JSX.Element => {
  // const [way, setWay] = useState(0);
  // const increment = useRef<number | null>(null);
  const dispatch = useDispatch();

  const startedCars = useSelector(
    (state: {
      startedCars: {
        velocity: number;
        distance: number;
        id: number;
        isStarted: boolean;
      }[];
    }) => state.startedCars,
  );

  const isStarted = startedCars.find(
    startedCar => startedCar.id === id,
  )?.isStarted;

  // const distance =
  //   startedCars.find(startedCar => startedCar.id === id)?.distance || 0;

  // const velocity =
  //   startedCars.find(startedCar => startedCar.id === id)?.velocity || 1;

  // const handleStart = () => {
  //   const riceTime = distance / velocity;
  //   increment.current = window.setInterval(() => {
  //     console.log(way);
  //     setWay((way: number) => way + 1);
  //   }, riceTime / 100);

  //   window.setTimeout(() => {
  //     if (increment.current) clearInterval(increment.current);
  //   }, riceTime);
  // };

  return (
    <div className={`garage-item ${className}`}>
      <div className="garage-item__top">
        <Button
          className=" button button--sm button--lightblue garage-item__btn"
          text="Select"
          callback={() => {
            dispatch(selectCar({ id, name, color }));
          }}
        />
        <Button
          className=" button button--sm button--lightblue garage-item__btn"
          text="Remove"
          callback={() => {
            dispatch(deleteCar(id));
          }}
        />
        <span className="garage-item__name">{name}</span>
      </div>
      <div className="garage-item__bottom">
        <Button
          className={`button button--engine ${
            isStarted ? 'button--disable' : ''
          } garage-item__engine garage-item__engine--start`}
          text="A"
          callback={() => {
            dispatch(startCar(id, 'started'));
          }}
        />

        <Button
          className={`button button--engine ${
            isStarted ? '' : 'button--disable'
          } garage-item__engine garage-item__engine--stop`}
          text="B"
          callback={() => {
            dispatch(stopCar(id, 'stoped'));
          }}
        />

        <CarIcon color={color} className="garage-item__car" />

        <svg
          className="garage-item__flag"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M18.926 5.584c-9.339 13.568-6.142-.26-14.037 6.357L6.684 19H4.665L1 4.59l1.85-.664c8.849-6.471 4.228 5.82 15.637 1.254.364-.147.655.09.439.404z" />
        </svg>
      </div>
    </div>
  );
};
export default GarageItem;
