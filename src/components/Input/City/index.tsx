import Autosuggest from 'react-autosuggest';
import React, { useState } from 'react';

import styles from './City.module.scss';
import { getLocationByString } from '../../../services/locations';

interface Props {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
}

export const CityInput = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([] as KiwiLocation[]);

  // Called when input is changed
  const onChangeInput = (_event: any, { newValue }: any) => {
    props.onChange(newValue);
  };

  // Called by autosuggest whenever new suggestions should be fetched
  const onSuggestionsFetchRequested = async ({ value }: any) => {
    setIsLoading(true);
    const { locations } = await getLocationByString(value);
    setSuggestions(locations);
    setIsLoading(false);
  };

  // Called by autosuggest when suggestions should be cleared
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. This function tells Autosuggest
  // how to calculate the input value for every given suggestion.
  const getSuggestionValue = (suggestion: KiwiLocation) => suggestion.name;

  // Custom rendering of suggestions
  const renderSuggestion = (suggestion: KiwiLocation) => (
    <div>
      {suggestion.name}, {suggestion.country.name}
    </div>
  );

  const inputProps = {
    placeholder: props.placeholder,
    value: props.value,
    onChange: onChangeInput,
  };

  return (
    <div className={styles.dropdown}>
      {props.label ? (
        <label className={styles.dropdown__label}>{props.label}:</label>
      ) : null}
      <Autosuggest
        getSuggestionValue={getSuggestionValue}
        inputProps={inputProps}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        renderSuggestion={renderSuggestion}
        suggestions={suggestions}
        theme={{
          container: styles.dropdown__container,
          input: styles.dropdown__input,
          inputOpen: styles['dropdown__input--open'],
          inputFocused: styles['dropdown__input--focused'],
          suggestionsContainer: styles['dropdown__suggestions-container'],
          suggestionsContainerOpen: styles['dropdown__suggestions-container--open'],
          suggestionsList: styles['dropdown__suggestions-list'],
          suggestion: styles.dropdown__suggestion,
          suggestionHighlighted: styles['dropdown__suggestion--highlighted'],
        }}
      />
      {isLoading ? (
        <span className={styles.dropdown__status}>Loading...</span>
      ) : (
        <span className={styles.dropdown__status} />
      )}
    </div>
  );
};
