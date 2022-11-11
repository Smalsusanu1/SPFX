import * as React from 'react';
// import styles from './ProductList.module.scss';
import { IProductListProps } from './IProductListProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ProductList extends React.Component<IProductListProps, any> {
  constructor(props: any) {
    super(props);
    this.state = { products: ["Laptop", "Monitor", "Keyboard", "Mouse", "Headphone"],
             selectedProduct: ""};
  }
  public componentWillMount() {
    this.props._productSelected({ product: this.state.selectedProduct });
  }
  public render(): React.ReactElement<IProductListProps> {
    return (
      <div >
        <div >
          <div className={styles.title}>{this.props.description} Webpart</div>
          {this.state.products.map(item => {
            return (
              <div>
                <div className={item == this.state.selectedProduct ? styles.submenuItemActive : styles.submenuItem} onClick={() => {
                  this.setState({ selectedProduct: item });
                  this.props._productSelected({ product: item });
                }}>{item}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}