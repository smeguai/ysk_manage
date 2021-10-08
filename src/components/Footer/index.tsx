import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const defaultMessage = 'smeguai';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'ysk',
          title: 'ysk',
          href: '',
          blankTarget: true,
        },
        {
          key: 'manage',
          title: 'manage',
          href: '',
          blankTarget: true,
        },
      ]}
    />
  );
};
