package model;

import java.util.List;

public class KullaVO {
	private String id;
	private Integer age;
	private String gender;
	private List<String> favoriateColor;
	private List<Car> car;



	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("KullaVO [id=");
		builder.append(id);
		builder.append(", age=");
		builder.append(age);
		builder.append(", gender=");
		builder.append(gender);
		builder.append(", favoriateColor=");
		builder.append(favoriateColor);
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
}