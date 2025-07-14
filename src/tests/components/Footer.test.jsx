import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../components/Footer.tsx'; 

describe('Footer', () => {
    test('renders Footer component', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

    test('displays copyright text', () => {
        render(<Footer />);
        expect(screen.getByText(/©/i)).toBeInTheDocument();
    });

    test('contains expected links', () => {
        render(<Footer />);
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);
    });

    test('matches snapshot', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });
});