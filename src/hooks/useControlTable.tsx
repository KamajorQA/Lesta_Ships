import { useState, useEffect } from 'react';
import { Image, Typography, theme } from 'antd';
import { BiCopy } from 'react-icons/bi';
import { BiSolidCopy } from 'react-icons/bi';

import { IShipsData, IShip } from '../models/data';

import { useSearch } from './useSearch';

import type { TableProps } from 'antd';
import type { ColumnsType, SorterResult } from 'antd/es/table/interface';

function useControlTable() {
  const [ships, setShips] = useState<IShip[]>([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { getColumnSearchProps } = useSearch();
  const {
    token: { colorPrimaryHover, colorBgLayout },
  } = theme.useToken();
  const baseUrl = 'https://vortex.korabli.su/api/graphql/glossary/';

  const requestAllShips = (query: string) => {
    setIsLoading(true);
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((serverData) => {
        const fetchedShips = serverData.data.vehicles;
        const arrangedShips = fetchedShips.map((el: IShip) => {
          return {
            ...el,
            image: el.icons.medium,
            country: el.nation.title,
            class: el.type.title,
          };
        });
        setShips(arrangedShips);
      })
      .catch((error) => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    requestAllShips(`query allShips {
      vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }`);
  }, []);

  const [sortedInfo, setSortedInfo] = useState<SorterResult<IShipsData>>({});

  const handleTableChange: TableProps<IShipsData>['onChange'] = (
    pagination,
    filters,
    sorter
  ) => {
    setSortedInfo(sorter as SorterResult<IShipsData>);
  };

  const clearLevelSort = () => {
    setSortedInfo({});
  };

  const setLevelSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'level',
    });
  };

  const columns: ColumnsType<any> = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      ...getColumnSearchProps('title'),
      render: (text) => <Typography.Text strong>{text}</Typography.Text>,
    },
    {
      title: 'Уровень',
      dataIndex: 'level',
      key: 'level',
      sorter: (a, b) => a.level - b.level,
      sortDirections: ['descend', 'ascend'],
      sortOrder: sortedInfo.columnKey === 'level' ? sortedInfo.order : null,
      ...getColumnSearchProps('level'),
      responsive: ['md'],
    },

    {
      title: 'Нация',
      dataIndex: 'country',
      key: 'country',
      ...getColumnSearchProps('country'),

      render: (text) => <Typography.Text>{text}</Typography.Text>,
      responsive: ['xs', 'sm'],
    },

    {
      title: 'Класс',
      dataIndex: 'class',
      key: 'class',
      ...getColumnSearchProps('class'),
      responsive: ['lg'],
    },

    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',

      render: (text) => (
        <Typography.Paragraph
          ellipsis={{ tooltip: text }}
          style={{
            width: 100,
            margin: 0,
          }}
          copyable={{
            icon: [
              <BiCopy
                style={{
                  color: colorBgLayout,
                }}
              />,
              <BiSolidCopy
                style={{
                  color: colorPrimaryHover,
                }}
              />,
            ],
          }}
        >
          {text}
        </Typography.Paragraph>
      ),
      responsive: ['xl'],
    },

    {
      title: 'Изображение',
      dataIndex: 'image',
      key: 'image',
      render: (src) => <Image src={src} width={150} />,
      responsive: ['sm'],
    },
  ];

  return {
    setLevelSort,
    clearLevelSort,
    handleTableChange,
    columns,
    ships,
    errorMessage,
    isLoading,
  };
}

export { useControlTable };
