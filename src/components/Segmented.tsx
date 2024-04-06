import classNames from 'classnames';
import { createContext, useContext, useState } from 'react';

type SegmentedContext = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

const SegmentedContext = createContext<SegmentedContext | undefined>(undefined);

function Segmented({
  selected,
  children,
}: {
  selected: string;
  children: React.ReactNode;
}) {
  const [selectedTab, setSelectedTab] = useState<string>(selected);

  return (
    <SegmentedContext.Provider value={{ selectedTab, setSelectedTab }}>
      <div className="flex gap-2 border-2 border-slate-300 bg-white">
        {children}
      </div>
    </SegmentedContext.Provider>
  );
}

Segmented.Tab = Tab;

type TabProps = { id: string; children: React.ReactNode };

function Tab({ id, children }: TabProps) {
  const { selectedTab, setSelectedTab } = useSegmentedContext();

  const isActive = selectedTab === id;

  return (
    <div
      role="button"
      className={classNames('py-2 px-3', {
        'bg-slate-300': isActive,
      })}
      onClick={() => setSelectedTab(id)}
    >
      {children}
    </div>
  );
}

function useSegmentedContext() {
  const segmented = useContext(SegmentedContext);

  if (segmented === undefined) {
    throw new Error(
      'useSegmentedContext must be used with the SegmentedContext Provider'
    );
  }

  return segmented;
}

export default Segmented;
