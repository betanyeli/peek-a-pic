import { render, waitFor } from '@testing-library/react-native';
import { View } from 'react-native';
import FooterComponent from './FooterComponent';


describe('FooterComponenttest', () => {
    it('Should be match with snapshot', () => {
        //Arrange
        const children = <View />;
        const { toJSON } = render(<FooterComponent children={children} />);
        // Assert

        // Act
        waitFor(() => { expect(toJSON).toMatchSnapshot() });
    });

});