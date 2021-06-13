import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../button';
import Input from '../input';
import { updateCar } from '../../store/actions';
import {
  NEW_CAR_COLOR_CHANGED,
  NEW_CAR_NAME_CHANGED,
  CAR_CREATED,
  SELECTED_CAR_COLOR_CHANGED,
  SELECTED_CAR_NAME_CHANGED,
} from '../../store/types';

import './g-form.scss';

const GForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const newCarName = useSelector(
    (state: { newCar: { name: string } }) => state.newCar.name,
  );
  const newCarColor = useSelector(
    (state: { newCar: { color: string } }) => state.newCar.color,
  );

  const selectedCarName = useSelector(
    (state: { selectedCar: { name: string } }) => state.selectedCar.name,
  );

  const selectedCarColor = useSelector(
    (state: { selectedCar: { color: string } }) => state.selectedCar.color,
  );

  const selectedCar = useSelector(
    (state: { selectedCar: { id: number; name: string; color: string } }) =>
      state.selectedCar,
  );

  console.log(selectedCarColor, selectedCarName);

  function handleNewCarColor(color: string) {
    dispatch({ type: NEW_CAR_COLOR_CHANGED, color });
  }

  function handleNewCarName(name: string) {
    dispatch({ type: NEW_CAR_NAME_CHANGED, name });
  }

  function handleSelectedCarColor(color: string) {
    dispatch({ type: SELECTED_CAR_COLOR_CHANGED, color });
  }

  function handleSelectedCarName(name: string) {
    dispatch({ type: SELECTED_CAR_NAME_CHANGED, name });
  }

  function handleCreateCar() {
    const car = {
      name: newCarName,
      color: newCarColor,
    };
    dispatch({ type: CAR_CREATED, car });
  }

  // function handleUpdatedCar() {
  //   console.log('updated 2');

  // }

  return (
    <form action="#" className="g-form">
      <div className="g-form__group">
        <Input
          type="text"
          className="g-form__input"
          value={newCarName}
          callback={(value: string) => {
            handleNewCarName(value);
          }}
        />
        <Input
          type="color"
          className="form-control--color g-form__input"
          value={newCarColor}
          callback={(value: string) => {
            handleNewCarColor(value);
          }}
        />
        <Button
          className="button--md button--lightblue g-form__btn"
          text="Create"
          callback={() => {
            console.log('i clicked');
            handleCreateCar();
          }}
        />
      </div>
      <div className="g-form__group">
        <Input
          type="text"
          className="g-form__input"
          value={selectedCarName}
          callback={(value: string) => {
            handleSelectedCarName(value);
          }}
        />
        <Input
          type="color"
          className="form-control--color g-form__input"
          value={selectedCarColor}
          callback={(value: string) => {
            handleSelectedCarColor(value);
          }}
        />
        <Button
          className="button--md button--lightblue g-form__btn"
          text="Update"
          callback={() => {
            console.log('i updated');
            dispatch(updateCar(selectedCar));
            console.log('i updated 2');
          }}
        />
      </div>
      <div className="g-form__group">
        <Button
          className="button--md button--lightgreen g-form__btn"
          text="Race"
          callback={() => {}}
        />
        <Button
          className="button--md button--lightgreen g-form__btn"
          text="Reset"
          callback={() => {}}
        />
        <Button
          className="button--md button--lightblue g-form__btn"
          text="Generate Cars"
          callback={() => {}}
        />
      </div>
    </form>
  );
};

export default GForm;
