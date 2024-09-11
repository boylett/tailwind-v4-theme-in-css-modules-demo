import type { MetaFunction } from '@remix-run/node';
import css from './index.module.css';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index () {
  return (
    <div className="p-[20px] text-white">
      <p>At 400px wide or larger, the body background should be dark red.</p>
      <div className={ css.test }>
        <p>And this text should have a dark green background.</p>
      </div>
    </div>
  );
}
