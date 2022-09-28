import { FC } from "react";
interface SettingsProps {
  onValueChange: (e: any) => void;
  perPage: number;
}

const Settings: FC<SettingsProps> = ({ perPage, onValueChange }) => {
  return (
    <div className='settings'>
      <input type='range' value={perPage} onChange={(e) => onValueChange(+e.target.value > 3 ? e.target.value : 5)} />
      <h4>TODOS per page: {perPage}</h4>
    </div>
  );
};

export default Settings;
