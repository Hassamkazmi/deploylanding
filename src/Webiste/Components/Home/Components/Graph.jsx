import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {useTranslation } from 'react-i18next'
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
const Graph = () => {
  const {t} = useTranslation();
  return (
    <>
    <div className="GraphCard">
      <p className='chartheader'>{t('ChartGraph')}</p>
      <div className='chartclass'>
      <Doughnut data={data}  />
      </div>
    <p className='chartmatch'>Riverina Paceway</p>
    </div>
  </>
  )
}
export default Graph