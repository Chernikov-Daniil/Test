import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import "./searchList.css";
import { List } from "./list";
import {
  fetchList,
  REG,
  searchOptions,
  urlSites,
  urlTest,
} from "../../utils/constants";
import { Sort } from "../sort";

export const SearchList = ({ filter, onGetNumber }) => {
  const [users, setUsers] = useState([]);
  const [sites, setSites] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const filterList = (users, filter) => {
    if (!filter) return users;

    const fuse = new Fuse(users, searchOptions(["name"]));
    const result = fuse.search(filter);

    let rez = [];
    for (let i in result) {
      rez.push(result[i].item);
    }

    return rez;
  };

  useEffect(() => {
    fetchList(urlSites)
      .then((data) => {
        const newSitesList = data?.reduce((acc, site) => {
          return {
            ...acc,
            [site.id]: site.url.replace(REG, ""),
          };
        }, {});
        setSites(newSitesList);
      })
      .catch((e) => console.log(e));
  }, [urlSites]);

  useEffect(() => {
    fetchList(urlTest)
      .then((data) => {
        data.forEach((item) => {
          let userSiteId = item.siteId;
          item.url = sites[userSiteId];
          return item;
        });
        setUsers(data);
      })
      .catch((e) => console.log(e));
  }, [urlTest, sites]);

  useEffect(() => {
    setFilteredList(filterList(users, filter));
  }, [filter, users]);

  useEffect(() => {
    onGetNumber(filteredList.length);
  }, [filteredList]);

  const handleSortName = () => {
    setUsers((prevUsers) =>
      prevUsers.sort((a, b) => {
        let nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    );
  };

  return (
    <>
      <Sort onSortName={handleSortName} />
      <div className="wrp">
        {filteredList?.map((item) => (
          <List key={item.id} list={item} />
        ))}
      </div>
    </>
  );
};
