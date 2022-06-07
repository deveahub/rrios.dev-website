import LogoLink from './components/LogoLink';
import SettingsDialog from './components/SettingsDialog';
import ToolBarForm from './components/ToolBarForm';
import { Container, TopBarStack } from './styles';

const ToolBar = () => (
  <Container>
    <TopBarStack>
      <LogoLink />
      <ToolBarForm />
      <SettingsDialog />
    </TopBarStack>
  </Container>
);

export default ToolBar;
