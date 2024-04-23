import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [product, selectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {product === '' ? 'No goods selected' : `${product} is selected`}

        {product && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              selectedGood('');
            }}
          />
        )}
      </h1>

      {goods.map(name => (
        <table className="table">
          <tbody>
            <tr
              data-cy="Good"
              className={product === name ? 'has-background-success-light' : ''}
            >
              <td>
                {product === name ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => {
                      selectedGood('');
                    }}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      selectedGood(name);
                    }}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {name}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </main>
  );
};
