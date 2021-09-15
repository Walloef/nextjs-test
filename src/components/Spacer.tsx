type Props = {
  last?: boolean;
};
export default function Spacer({ last }: Props) {
  return (
    <div className={last ? 'last' : 'spacer'}>
      <style jsx>
        {`
          .spacer {
            margin-top: 35px;
          }
          .last {
            padding-top: 35px;
            margin-bottom: 35px;
          }
        `}
      </style>
    </div>
  );
}
