import React from 'react';
import { Button } from '@material-ui/core';
import { ExportToCsv } from 'export-to-csv';

const HomePage = ({ ckExport, rawExport }) => {
  const handleClick = (fileName, data) => {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      filename: `${fileName}_${new Date().toLocaleString()}`,
      showLabels: true,
      showTitle: false,
      title: 'CK_CSV_EXPORT',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };

    const csvExporter = new ExportToCsv(options);

    return csvExporter.generateCsv(data);
  };
  return (
    <div data-test='homePage' style={{ marginTop: '24px' }}>
      <Button
        disabled={!ckExport?.length}
        color='primary'
        variant='contained'
        style={{ marginRight: '24px' }}
        onClick={() => handleClick('CK_CSV_EXPORT', ckExport)}
      >
        Export CK CSV
      </Button>
      <Button
        disabled={!rawExport?.length}
        color='primary'
        variant='contained'
        onClick={() => handleClick('RAW_CSV_EXPORT', rawExport)}
      >
        Export Raw CSV
      </Button>
    </div>
  );
};

export default HomePage;
