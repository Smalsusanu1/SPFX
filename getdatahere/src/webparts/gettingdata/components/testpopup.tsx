import * as React from 'react';
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  Modal,
  IIconProps,
  IStackProps,
  IconButton,
  IButtonStyles
} from 'office-ui-fabric-react/lib';


export const MYModal = (myprops: any) => {
  const [isModalOpen, setIsOpen] = React.useState(false);
  const [isPopup, setisPopup] = React.useState(true);
  const [name, setname] = React.useState('');
  //const titleId = useId('title');
  React.useEffect(() => {
    setIsOpen(true);
  }, [isPopup]);
  function ExitHandler() {
    setIsOpen(false);
    setisPopup(current => !current)
    myprops.handler();
  }

  return (
    <div>
      <Modal
        titleAriaId='title'
        isOpen={isModalOpen}
        onDismiss={ExitHandler}
        isBlocking={true}
        containerClassName={contentStyles.container}
      >
        <div className={contentStyles.header}>
          <span id="title" style={{ display: "flex", justifyContent: "center" }}>Add Employee Details</span>
          <IconButton
            styles={iconButtonStyles}
            iconProps={cancelIcon}
            ariaLabel="Close popup modal"
            onClick={ExitHandler}
          />
        </div>
        <div className={contentStyles.body}>
          {/* <p style={{display: "flex", justifyContent: "center"}}>
            test: {myprops.test} <br/>
            description: {myprops.description}<br/> 
        </p> */}
          <div className='row'>
            <div className='col-sm-12'>
              <div className='col-sm-6'>
                <label>Name:</label>
                <input type='text' placeholder='Enter Name' />
              </div>
              <div className='col-sm-6'>
                <label>Email:</label>
                <input type='text' placeholder='Enter Email' />
              </div>
            </div>

            <div className='col-sm-12'>
              <div className='col-sm-6'>
                <label>Designation:</label>
                <input type='text' placeholder='Enter Designation' />
              </div>
              <div className='col-sm-6'>
                <label>Phone Number:</label>
                <input type='text' placeholder='Enter Phone Number' />
              </div>
            </div>
          </div>
          <button type='button'>Save</button>
          <span>  </span>
          <button onClick={ExitHandler}>Cancel</button>
        </div>
      </Modal>

    </div>


  );
};

const cancelIcon: IIconProps = { iconName: 'Cancel' };

const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
    width: '68%',

  },

  header: [
    // eslint-disable-next-line deprecation/deprecation
    theme.fonts.xLarge,
    {
      flex: '1 1 auto',
      borderTop: '4px solid ${theme.palette.themePrimary}',
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});



const stackProps: Partial<IStackProps> = {
  horizontal: true,
  tokens: { childrenGap: 40 },
  styles: { root: { marginBottom: 20 } },
};
const iconButtonStyles: Partial<IButtonStyles> = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};

