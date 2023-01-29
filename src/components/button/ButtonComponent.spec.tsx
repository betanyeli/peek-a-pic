import { ButtonComponent } from "./ButtonComponent";
import { fireEvent, render, waitFor } from '@testing-library/react-native';

describe('Button component test', () => {
    it('Should be match with snapshot', () => {
        //Arrange
        const fn = jest.fn()
        const { toJSON } = render(<ButtonComponent onPress={fn} icon={""} />)

        // Assert

        // Act
        waitFor(() => { expect(toJSON).toMatchSnapshot() });
    });

    it('Should trigger an OnPress Function when button is pressed', () => {
        //Arrange
        const fn = jest.fn()
        const { getByTestId } = render(<ButtonComponent onPress={fn} icon={""} />)
        const button = getByTestId('button');

        // Assert
        fireEvent.press(button)

        // Act
        expect(fn).toBeCalled()
    });
});