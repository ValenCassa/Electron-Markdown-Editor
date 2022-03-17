import { dialog } from '@electron/remote';
import { AiFillSave } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import styles from '../styles/Navbar.module.css';
import Logo from './Logo';
const fs = require('fs')

const Navbar = ({ setState, file }) => {
  const onOpen = () => {
    dialog.showOpenDialog({ properties: ['openFile'] }).then((file) => {
      const filePath = file.filePaths[0];

      if (filePath === undefined) {
        return console.log('No file selected');
      }
      fs.readFile(filePath, 'utf-8', function (err, data) {
        if (err) return console.log(err);

        setState({ data, path: filePath });
      });
    });
  };

  const onSave = () => {
    if (file.path === '') {
      dialog.showSaveDialog().then((path) => {
        const { filePath } = path;

        if (filePath === undefined) {
          return console.log('No path selected');
        }

        fs.writeFile(filePath, file.data, function (err, data) {
          if (err) return console.log(err);
        });

        setState({ ...file, path: filePath });
      });
    }
    fs.writeFile(file.path, file.data, function (err, data) {
      if (err) return console.log(err);
    });
  };

  return (
    <div
      style={{
        position: 'relative',
        zIndex: '9999999',
      }}
    >
      <div className={styles.upperNav}>
        <div>
          <div className={styles.buttonContainer}>
            <button onClick={onOpen} className={styles.button}>
              <IoMdAddCircle color="white" size={18} />
            </button>
            <button onClick={onSave} className={styles.button}>
              <AiFillSave color="white" size={18} />
            </button>
          </div>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
