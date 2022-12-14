import { FC } from "react";
export interface SettingsProps {
  setPerPage: (elementsPerPage: number) => void;
  perPage: number;
}

const Settings: FC<SettingsProps> = ({ perPage, setPerPage }) => {
  return (
    <div className='settings'>
        <label htmlFor="customRange1" className="form-label">TODOS per page: {perPage}</label>
        <input type="range" className="form-range" id="customRange1" value={perPage}
               onChange={(e) => setPerPage(+e.target.value > 3 ? +e.target.value : 5)}/>
    </div>
  );
};

export default Settings;
