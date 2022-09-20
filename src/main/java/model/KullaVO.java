package model;

import java.util.List;

public class KullaVO {
	private String oShippingAddress;
	private String oDestinationAddress;
	private Integer oFee;
	private Integer oPrice;
	private String oDeadLine;
	private String oOrderType;
	private String oComment;
	private List<Item> item;
	private List<Car> car;
//	private List<String> favoriateColor;
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("KullaVO [oShippingAddress=");
		builder.append(oShippingAddress);
		builder.append(", oDestinationAddress=");
		builder.append(oDestinationAddress);
		builder.append(", oFee=");
		builder.append(oFee);
		builder.append(", oPrice=");
		builder.append(oPrice);
		builder.append(", oDeadLine=");
		builder.append(oDeadLine);
		builder.append(", oOrderType=");
		builder.append(oOrderType);
		builder.append(", oComment=");
		builder.append(oComment);
		builder.append(", item=");
		builder.append(item);
		builder.append("]");
		builder.append(", car=");
		builder.append(car);
		builder.append("]");
		return builder.toString();
	}

	class Car {
		private String make;
		private String mode;
		private Integer year;
		@Override
		public String toString() {
			StringBuilder builder = new StringBuilder();
			builder.append("Car [make=");
			builder.append(make);
			builder.append(", mode=");
			builder.append(mode);
			builder.append(", year=");
			builder.append(year);
			builder.append("]");
			return builder.toString();
		}
	
		
	}
	
	class Item {
		private String brand;
		private String detail;
		private Integer quantity;
		@Override
		public String toString() {
			StringBuilder builder = new StringBuilder();
			builder.append("Product [brand=");
			builder.append(brand);
			builder.append(", detail=");
			builder.append(detail);
			builder.append(", quantity=");
			builder.append(quantity);
			builder.append("]");
			return builder.toString();
		}
		
		
	}
}