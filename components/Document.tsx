interface Props {
  file: string;
}

const Document: React.FC<Props> = ({ file }) => (
  <object
    width="100%"
    height="800"
    data={file}
    type="application/pdf"
    className="z-10 py-5"
  ></object>
);

export default Document;
