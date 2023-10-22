import { useNavigate, useLocation } from 'react-router-dom';

interface IMenuLink {
  key: string;
}

function useControlNavigation() {
  const navigate = useNavigate();
  const goHome = () => navigate('/');
  const goToChosenPage = (choice: IMenuLink) => navigate(`${choice.key}`);

  const selectedKey = useLocation().pathname;

  const highlightActiveLink = () => {
    switch (selectedKey) {
      case '/':
        return ['/'];
      case '/shipslist':
        return ['shipslist'];
      case '/contacts':
        return ['contacts'];
      default:
        return ['not found'];
    }
  };

  return {
    highlightActiveLink,
    goHome,
    goToChosenPage,
  };
}

export { useControlNavigation };
