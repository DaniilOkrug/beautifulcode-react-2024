import { appStore } from '@/app/appStore';
import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { CreateCategoryForm } from './CreateCategoryForm';

const wrapper = (children: ReactNode) => {
  return <Provider store={appStore}>{children}</Provider>;
};
function setup(jsx: ReactNode) {
  return {
    ...render(wrapper(jsx)),
  };
}

describe('Create Category Form', () => {
  it('renders correctly', () => {
    setup(<CreateCategoryForm />);

    const element = screen.getByText('Category name');
    expect(element).toBeInTheDocument();
  });
});
