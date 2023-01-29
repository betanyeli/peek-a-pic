import SharedSocialMediaComponent from "./SharedSocialMediaComponent";
import { render, waitFor } from '@testing-library/react-native';

jest.useFakeTimers()
describe('SharedSocialMediaComponent test', () => {
    it('Should be match with snapshot', () => {
        //Arrange
        const { toJSON } = render(<SharedSocialMediaComponent />);
        // Assert

        // Act
        waitFor(() => { expect(toJSON).toMatchSnapshot() });
    });

});