import { MdHighlightOff, MdChevronRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Dir } from "./styles";

export const MainLink = ({ setActive, link, setLayers }: any) => (
  <Dir
    onClick={() => {
      setLayers((layers: any) => layers.concat(link));
      setActive && setActive();
    }}
  >
    <div>
      <div className="label">{link.label}</div>
      <div className="icon">
        <MdChevronRight />
      </div>
    </div>
  </Dir>
);

export const SubLink = ({ link }: any) => (
  <Dir>
    <div>
      <div className="label">
        <NavLink to={link.url} className="bar">{link.label}</NavLink>
      </div>
    </div>
  </Dir>
);

export const History = ({ setLayers, link, index }: any) => (
  <Dir
    onClick={() => {
      setLayers((layers: any) => layers.slice(0, index));
    }}
  >
    <div className="history" >
      <div className="icon">
        <MdHighlightOff />
      </div>
      <div className="label">{link.label}</div>
    </div>
  </Dir>
);

export const Showing = ({ layers, setLayers }: any) => {
  return (
    <>
      {layers[layers.length - 1] &&
        layers[layers.length - 1].links.map((link: any, index: number) => {

          return !!link.links ?
            (<MainLink setLayers={setLayers} link={link} key={index} />) :
            (<SubLink link={link} key={index} />)
        })
      }
    </>
  );
};
