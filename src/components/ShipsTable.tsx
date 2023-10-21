import { Button, Table } from 'antd';

import { useControlTable } from '../hooks/useControlTable';
import { IShipsData } from '../models/data';

function ShipsTable() {
  const { setLevelSort, clearLevelSort, handleTableChange, columns, ships } =
    useControlTable();

  return (
    <>
      <article className="flexCenter mobileAdaptive tableControls">
        <Button onClick={setLevelSort}>Sort by power</Button>
        <Button onClick={clearLevelSort}>Clear sorter</Button>
      </article>
      <Table
        columns={columns}
        dataSource={ships as IShipsData[]}
        onChange={handleTableChange}
        rowKey="title"
        pagination={{
          position: ['bottomCenter'],
          hideOnSinglePage: true,
          defaultPageSize: 5,
          pageSizeOptions: ['3', '5', '10', '20', '50'],
        }}
      />
    </>
  );
}

export { ShipsTable };
